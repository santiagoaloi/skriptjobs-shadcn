<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button aria-label="button dark toggle" size="icon" title="Toggle Color Scheme" variant="ghost">
        <div class="i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'light' }"
          flex="~ gap-2"
          @click="color.preference = 'light'"
        >
          <Icon name="i-ph-sun-dim-duotone" size="16" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'dark' }"
          flex="~ gap-2"
          @click="color.preference = 'dark'"
        >
          <Icon name="i-ph-moon-stars-duotone" size="16" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'system' }"
          flex="~ gap-2"
          @click="color.preference = 'system'"
        >
          <Icon name="i-lucide-monitor" size="16" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
