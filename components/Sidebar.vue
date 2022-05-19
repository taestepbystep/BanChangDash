<template>
    <aside class="fixed z-20 w-64 min-h-screen transition-transform duration-150 ease-in transform -translate-x-full md:shadow lg:translate-x-0 bg-gray-50">
        <div class="flex items-center justify-center py-4">
            <div class="inline-flex">
                <NuxtLink to="/" class="inline-flex flex-row items-center">
                    
                </NuxtLink>
            </div>
        </div>
        <div class="px-4 py-6 sidebar-content">
            <Menu/>
        </div>
    </aside>
</template>