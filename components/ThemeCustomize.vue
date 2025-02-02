<script setup lang="ts">
import { themeNames, themes } from '@/lib/registry/themes'

const { theme, radius, setTheme, setRadius, setColorMode } = useCustomize()

const themeButtons = [
  { color: 'light', icon: 'i-ph-sun-dim-duotone' },
  { color: 'dark', icon: 'i-ph-moon-stars-duotone' },
  { color: 'system', icon: 'i-lucide-monitor' },
]

const RADII = [0, 0.25, 0.5, 0.75, 1]

const colorMode = useColorMode()
</script>

<template>
  <div class="grid gap-6">
    <div class="space-y-1.5">
      <Label>Color</Label>
      <div class="grid grid-cols-3 gap-2">
        <template v-for="color in themeNames" :key="color">
          <Button
            :class="{ 'border-primary': theme === color }"
            class="justify-start gap-2 border-2"
            variant="outline"
            @click.stop="setTheme(color)"
          >
            <span :style="{ backgroundColor: `hsl(${themes[color].activeColor.light})` }" class="h-5 w-5 flex items-center justify-center rounded-full">
              <Icon v-if="theme === color" class="text-white" name="i-radix-icons-check" size="16" />
            </span>
            <span class="text-xs capitalize">{{ color }}</span>
          </Button>
        </template>
      </div>
    </div>

    <div class="space-y-1.5">
      <Label>Radius</Label>
      <div class="grid grid-cols-5 gap-2">
        <template v-for="r in RADII" :key="r">
          <Button
            :class="{ 'border-primary border-2': radius === r }"
            class="justify-center gap-2"
            variant="outline"
            @click="() => setRadius(r)"
          >
            <span class="text-xs capitalize">{{ r }}</span>
          </Button>
        </template>
      </div>
    </div>

    <div class="space-y-1.5">
      <Label>Theme</Label>
      <div class="grid grid-cols-3 gap-2">
        <Button
          v-for="themeButton in themeButtons "
          :key="themeButton.color"
          :class="{ 'border-primary border-2': colorMode.preference === themeButton.color }"
          class="justify-center gap-2"
          variant="outline"
          @click="() => {
            setColorMode(themeButton.color)
          }"
        >
          <Icon :name="themeButton.icon" size="16" />
          <span class="text-xs capitalize">{{ themeButton.color }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>
