<script lang="ts" setup>
definePageMeta({
  layout: 'blank',
})
</script>

<script lang="ts" setup></script>

<template>
  <Container class="relative flex flex-col items-center py-10 text-center lg:py-20">
    <div>
      <Badge class="rounded-xl px-3 py-1.5 text-sm font-normal lg:py-2" to="#" variant="secondary">
        New feature! Check out our new dashboard
        <Icon class="ml-3 h-4 w-4" name="lucide:arrow-right" />
      </Badge>
    </div>

    <h1 class="mb-4 mt-7 text-4xl font-bold lg:mb-6 lg:mt-5 lg:text-center lg:text-5xl xl:text-7xl">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      High-performing remote teams.<br />The future of work.
    </h1>
    <p class="mx-auto max-w-[760px] text-lg text-muted-foreground lg:text-center lg:text-xl">
      Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep
      employees engaged from anywhere.
    </p>

    <div class="grid grid-cols-1 mt-8 w-full items-center gap-3 lg:mt-10 sm:flex sm:justify-center">
      <Button size="lg" variant="outline">
        <Icon name="lucide:play-circle" /> Demo
      </Button>
      <Button size="lg">
        Sign up
      </Button>
    </div>

    <div
      class="mx-auto mt-10 h-[350px] w-full overflow-hidden rounded-md lg:mt-10 lg:h-[520px] lg:w-[900px] lg:rounded-lg"
    />
  </Container>
</template>
