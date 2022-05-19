<template>
    <header class="fixed z-10 w-full px-4 py-4 ml-64 bg-white shadow lg:ml-0">
        <div class="flex flex-row items-center">
            <!-- hamberger menu -->
            <div class="flex lg:hidden" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <button  type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <NuxtLink to="/" class="inline-flex flex-row items-center">
                    
                </NuxtLink>
            </div>

            <div class="flex ml-auto space-x-4">
                <!-- search form -->
                <form action="#">
                    <div class="relative hidden md:flex ">
                        <div class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                            <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input id="search" type="text" name="search" class="w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400" placeholder="Search..."/>
                    </div>
                    <div class="flex md:hidden">
                        <a href="#" class="flex items-center justify-center w-10 h-10 border-transparent">
                            <svg class="w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                    </div>
                </form>
                <!-- profile picture -->
                <a href="#" class="flex flex-row items-center">
                    <img src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png" alt="Profile picture" class="w-10 h-10 bg-gray-200 border rounded-full"/>
                    <span class="flex flex-col ml-2">
                        <span class="w-20 font-semibold leading-none tracking-wide truncate">John Doe</span>
                        <span class="w-20 mt-1 text-xs leading-none text-gray-500 truncate">Manager</span>
                    </span>
                </a>
                
            </div>
        </div>
        
        <!-- sidebar mobile -->
        <SidebarMobile/>
    </header>
</template>