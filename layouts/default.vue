<template>
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <!-- this is sidebar -->
        <Sidebar />
        <main class="flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in">
            <!-- this is header -->
            <Navbar/>
            <!-- this is content -->
            <div class="flex flex-col flex-grow mt-16 p-4 ml-64">
                <Nuxt />
            </div>
            <!-- this is footer -->
            <Footer />
        </main>
  </div>
</template>
