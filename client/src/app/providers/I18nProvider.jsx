import { useMemo, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { I18nContext } from './i18nContext.js'
import en from '../../i18n/en.json'
import es from '../../i18n/es.json'
import fr from '../../i18n/fr.json'
import { navigateWithLoader } from '../../lib/loadingNavigation.js'

/**
 * Función de traducción con fallback
 * @param {string} key - Clave de traducción (ej: 'nav.home', 'hero.title')
 * @param {string} language - Idioma actual ('en', 'es', 'fr')
 * @returns {string} - Texto traducido o fallback
 */
function translate(key, language) {
  const translations = {
    en,
    es,
    fr,
  }

  const current = translations[language] || en
  const keys = key.split('.')
  let value = current

  for (const k of keys) {
    value = value?.[k]
    if (!value) break
  }

  // Fallback: si no encuentra en el idioma actual, intenta EN
  if (!value && language !== 'en') {
    return translate(key, 'en')
  }

  // Si sigue sin encontrar, retorna la key tal cual (nunca undefined)
  return value || key
}

/**
 * Detectar idioma de la URL actual usando prefijo
 * @param {string} pathname - Ruta actual (ej: '/', '/esp', '/fr/trips')
 * @returns {string} - 'en', 'es' o 'fr'
 */
function getLanguageFromPath(pathname) {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname || '/'

  if (normalized === '/esp' || normalized.startsWith('/esp/')) return 'es'
  if (normalized === '/fr' || normalized.startsWith('/fr/')) return 'fr'
  return 'en'
}

export function I18nProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Detectar idioma actual de la URL
  const language = useMemo(() => getLanguageFromPath(location.pathname), [location.pathname])

  // Actualizar el atributo lang del HTML dinámicamente para SEO
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Función para cambiar de idioma navegando a la URL correcta
  const changeLanguage = useCallback(
    (newLang) => {
      let pathname = location.pathname

      // Remover /esp o /fr si existen en la URL
      pathname = pathname.replace(/^\/esp(\/.*)?$/, (match, rest) => rest || '/')
      pathname = pathname.replace(/^\/fr(\/.*)?$/, (match, rest) => rest || '/')

      let newPath = pathname

      // Agregar prefijo de idioma según el nuevo idioma seleccionado
      if (newLang === 'es') {
        newPath = newPath === '/' ? '/esp' : `/esp${newPath}`
      } else if (newLang === 'fr') {
        newPath = newPath === '/' ? '/fr' : `/fr${newPath}`
      }
      // Si es EN, mantener el path sin prefijo

      navigateWithLoader(navigate, newPath, {
        currentPath: `${location.pathname}${location.search}${location.hash}`,
      })
    },
    [location, navigate]
  )

  // Valor del context con todas las propiedades requeridas
  const contextValue = useMemo(
    () => ({
      language,
      currentLang: language, // Alias para compatibilidad con Header.jsx
      isSpanish: language === 'es',
      isFrench: language === 'fr',
      changeLanguage,
      t: (key) => translate(key, language),
    }),
    [language, changeLanguage]
  )

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}
