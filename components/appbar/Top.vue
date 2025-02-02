<script lang="ts" setup>
const miniLinks = [
  { name: 'About us', href: '/' },
  { name: 'Press', href: '/' },
  { name: 'Careers', href: '/' },
  { name: 'Legal', href: '/' },
  { name: 'Support', href: '/' },
  { name: 'Contact', href: '/' },
  { name: 'Sitemap', href: '/' },
  { name: 'Cookie settings', href: '/' },
]
const links = {
  products: {
    'resources': [
      {
        name: 'Blog',
        description: 'The latest industry news, updates and info.',
        icon: 'lucide:book',
        href: '/',
      },
      {
        name: 'Customer stories',
        description: 'See how our customers use our platform to grow their business.',
        icon: 'lucide:sparkle',
        href: '/',
      },
      {
        name: 'Video tutorials',
        description: 'All the information you need to know about our platform.',
        icon: 'lucide:play-circle',
        href: '/',
      },
      {
        name: 'Help center',
        description: 'Get all your questions answered in our help center.',
        icon: 'lucide:life-buoy',
        href: '/',
      },
    ],
    'company': [
      {
        name: 'About us',
        description: 'Learn more about our company and our team.',
        icon: 'lucide:flag',
        href: '/',
      },
      {
        name: 'Careers',
        description: 'Join our team and help us build the future.',
        icon: 'lucide:briefcase',
        href: '/',
      },
      {
        name: 'Contact us',
        description: 'Get in touch with our team.',
        icon: 'lucide:mail',
        href: '/',
      },
    ],
    'use cases': [
      {
        name: 'Marketing',
        description: 'Learn more about our company and our team.',
        icon: 'lucide:flag',
        href: '/',
      },
      {
        name: 'Sales',
        description: 'Join our team and help us build the future.',
        icon: 'lucide:circle-dollar-sign',
        href: '/',
      },
      {
        name: 'Customer support',
        description: 'Get in touch with our team.',
        icon: 'lucide:mail',
        href: '/',
      },
      {
        name: 'Engage',
        description: 'Get in touch with our team.',
        icon: 'lucide:messages-square',
        href: '/',
      },
    ],
  },
  resources: {
    'resources': [
      {
        name: 'Blog',
        description: 'The latest industry news, updates and info.',
        icon: 'lucide:book',
        href: '/',
      },
      {
        name: 'Customer stories',
        description: 'See how our customers use our platform to grow their business.',
        icon: 'lucide:sparkle',
        href: '/',
      },
      {
        name: 'Video tutorials',
        description: 'All the information you need to know about our platform.',
        icon: 'lucide:play-circle',
        href: '/',
      },
      {
        name: 'Help center',
        description: 'Get all your questions answered in our help center.',
        icon: 'lucide:life-buoy',
        href: '/',
      },
    ],
    'company': [
      {
        name: 'About us',
        description: 'Learn more about our company and our team.',
        icon: 'lucide:flag',
        href: '/',
      },
      {
        name: 'Careers',
        description: 'Join our team and help us build the future.',
        icon: 'lucide:briefcase',
        href: '/',
      },
      {
        name: 'Contact us',
        description: 'Get in touch with our team.',
        icon: 'lucide:mail',
        href: '/',
      },
    ],
    'use cases': [
      {
        name: 'Marketing',
        description: 'Learn more about our company and our team.',
        icon: 'lucide:flag',
        href: '/',
      },
      {
        name: 'Sales',
        description: 'Join our team and help us build the future.',
        icon: 'lucide:circle-dollar-sign',
        href: '/',
      },
      {
        name: 'Customer support',
        description: 'Get in touch with our team.',
        icon: 'lucide:mail',
        href: '/',
      },
      {
        name: 'Engage',
        description: 'Get in touch with our team.',
        icon: 'lucide:messages-square',
        href: '/',
      },
    ],
  },
}
</script>

<template>
  <div :style="{ position: 'sticky', top: '0px' }" class="z-50 border-b bg-background/90 backdrop-blur">
    <Container>
      <div class="h-16 flex items-center justify-between lg:h-20">
        <div class="flex items-center gap-10">
          <NuxtLink class="flex items-center gap-3" to="#">
            <SkriptJobsLogoSingle />
            <div class="text-xl font-semibold -ml-2">
              Skriptjobs
            </div>
          </NuxtLink>
          <NavigationMenu as="nav" class="hidden items-center justify-start gap-8 lg:flex">
            <NavigationMenuList class="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <Button to="#" variant="ghost">
                    Home
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <template v-for="(data, link, i) in links" :key="i">
                <NavigationMenuItem>
                  <NavigationMenuTrigger class="h-9 px-3 text-sm capitalize">
                    {{ link }}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      class="grid grid-cols-1 gap-5 bg-background p-6 py-5 ring-1 ring-muted lg:grid-cols-2 xl:grid-cols-3 lg:w-[750px] xl:w-[1000px]"
                    >
                      <div v-for="(item, cat, index) in data" :key="`${cat}-${index}`">
                        <p class="mb-5 text-sm text-primary font-semibold capitalize">
                          {{ cat }}
                        </p>
                        <ul class="w-full flex flex-col gap-2">
                          <li v-for="(child, k) in item" :key="k">
                            <NavigationMenuLink as-child class="data-[active]:bg-muted/80">
                              <NuxtLink
                                :to="child.href"
                                class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                              >
                                <Icon
                                  :name="child.icon"
                                  class="mt-px h-5 w-5 shrink-0 text-primary"
                                />
                                <div class="flex flex-col gap-1.5 leading-none">
                                  <p class="text-sm font-semibold">
                                    {{ child.name }}
                                  </p>
                                  <p
                                    class="text-sm text-muted-foreground"
                                    v-html="child.description"
                                  />
                                </div>
                              </NuxtLink>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </template>
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <Button to="/" variant="ghost">
                    Pricing
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Button size="icon-sm" variant="ghost">
                <Icon class="h-5 w-5" name="lucide:menu" />
              </Button>
              <SheetContent class="w-[90%] p-0">
                <template #content>
                  <SheetTitle class="sr-only" title="Mobile menu" />
                  <SheetDescription class="sr-only" description="Mobile menu" />
                  <SheetX class="z-20" />

                  <ScrollArea class="h-full p-5">
                    <div class="flex flex-col gap-2">
                      <Button class="justify-start text-base" to="#" variant="ghost">
                        Home
                      </Button>
                      <template v-for="(data, link, i) in links" :key="i">
                        <Collapsible>
                          <CollapsibleTrigger as-child>
                            <Button
                              class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180"
                              to="#"
                              variant="ghost"
                            >
                              {{ link }}
                              <Icon class="ml-auto h-4 w-4 transition" name="lucide:chevron-down" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent
                            class="data-[state=closed]:animate-none data-[state=open]:p-3 data-[state=open]:pt-0"
                          >
                            <div
                              v-for="(item, cat, index) in data"
                              :key="`${cat}-${index}`"
                              class="mt-5"
                            >
                              <p class="mb-5 text-sm text-primary font-semibold capitalize">
                                {{ cat }}
                              </p>
                              <ul class="w-full flex flex-col gap-2">
                                <li v-for="(child, k) in item" :key="k">
                                  <NavigationMenuLink as-child class="data-[active]:bg-muted/80">
                                    <NuxtLink
                                      :to="child.href"
                                      class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                                    >
                                      <Icon
                                        :name="child.icon"
                                        class="mt-px h-5 w-5 shrink-0 text-primary"
                                      />
                                      <div class="flex flex-col gap-1.5 leading-none">
                                        <p class="text-sm font-semibold">
                                          {{ child.name }}
                                        </p>
                                      </div>
                                    </NuxtLink>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </template>
                      <Button class="justify-start text-base" to="#" variant="ghost">
                        Pricing
                      </Button>

                      <GradientDivider class="my-5" />

                      <ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
                        <li v-for="(m, j) in miniLinks" :key="j">
                          <NuxtLink :to="m.href" class="py-2">
                            {{ m.name }}
                          </NuxtLink>
                        </li>
                      </ul>
                      <GradientDivider class="my-5" />
                      <Button to="#">
                        Sign up
                      </Button>
                      <Button to="#" variant="outline">
                        Log in
                      </Button>
                    </div>
                  </ScrollArea>
                </template>
              </SheetContent>
            </SheetTrigger>
          </Sheet>
        </div>
        <div class="hidden items-center gap-3 lg:flex">
          <Button size="sm" to="#" variant="ghost">
            Log in
          </Button>
          <Button size="sm" to="#">
            Sign up
          </Button>
        </div>
      </div>
    </Container>
  </div>
</template>
