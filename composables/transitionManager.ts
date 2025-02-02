/**
 * This composable manages the transitions on the entire page.
 * Switching themes should not have any transitions.
 * This composable's main purpose is to disable transitions when the theme is switched.
 */
export function useTransitionManager() {
  let styleElement: HTMLStyleElement | null = null

  /**
   * Disables all CSS transitions globally.
   */
  function disableTransitions() {
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.textContent = '* { transition: none !important; }'
      document.head.prepend(styleElement)
    }
  }

  /**
   * Enables all CSS transitions globally back.
   */
  function enableTransitions() {
    if (styleElement) {
      styleElement.remove()
      styleElement = null
    }
  }

  return {
    disableTransitions,
    enableTransitions,
  }
}
