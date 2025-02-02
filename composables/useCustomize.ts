import type { ThemeName } from '@/lib/registry/themes'

interface Config {
  theme?: ThemeName
  radius: number
}

export function useCustomize() {
  const config = useCookie<Config>('config', {
    default: () => ({
      theme: 'zinc',
      radius: 0.5,
    }),
  })

  const colorMode = useColorMode()

  const { disableTransitions, enableTransitions } = useTransitionManager()

  const theme = computed(() => config.value.theme)
  const radius = computed(() => config.value.radius)
  const themeClass = computed(() => `theme-${config.value.theme}`)
  const radiusStyle = computed(() => `--radius: ${radius.value}rem;`)

  async function setTheme(themeName: ThemeName) {
    disableTransitions()

    if (config.value.theme === themeName)
      return

    config.value.theme = themeName
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius
  }

  function setColorMode(mode) {
    disableTransitions()
    colorMode.preference = mode
    requestAnimationFrame(() => {
      enableTransitions()
    })
  }

  return {
    themeClass,
    radiusStyle,
    theme,
    setTheme,
    radius,
    setRadius,
    setColorMode,
  }
}
