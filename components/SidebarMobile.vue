<template>
  <div
    class="fixed top-0 bottom-0 right-0 flex flex-col invisible w-64 max-w-full px-4 text-gray-700 transition duration-300 ease-in-out border-none shadow-sm outline-none bg-gray-50 offcanvas offcanvas-end bg-clip-padding"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div
      class="flex-grow mt-4 mb-10 overflow-y-auto offcanvas-body"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <div class="flex items-center justify-center">
        <div class="inline-flex">
          <NuxtLink to="/" class="inline-flex flex-row items-center">
            
          </NuxtLink>
        </div>
      </div>
      <div class="py-6 overflow-y-auto sidebar-content">
        <Menu/>
      </div>
    </div>
  </div>
</template>
