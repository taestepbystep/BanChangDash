<template>
    <div v-if="show" class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto h-5/6 md:h-auto">
            <div class="py-4 text-left px-6">
                <!-- header -->
                <div class="flex justify-center items-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มงาน</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- driver id -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">คนขับรถ*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="driver" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>driver 1</option>
                                        <option>driver 2</option>
                                        <option>driver 3</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- truck id -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">รถบรรทุก*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="truck" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>truck 1</option>
                                        <option>truck 2</option>
                                        <option>truck 3</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- container id -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ตู้คอนเทนเนอร์*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="container" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>container 1</option>
                                        <option>container 2</option>
                                        <option>container 3</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- route id -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <div class="flex justify-between">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">เส้นทาง*</label>
                                    <div>
                                        <input type="checkbox" id="checkbox" v-model="selectRoute">
                                        <label for="checkbox">{{ selectRoute }}</label>
                                    </div>
                                </div>
                                <div v-if="selectRoute" class="flex items-center space-x-1">
                                    <select v-model="route" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>route 1</option>
                                        <option>route 2</option>
                                        <option>route 3</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>

                        <!-- origin name -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ต้นทาง*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                            </div>
                        </div>
                        <!-- desination name -->
                        <div class="flex justify-center">
                            <div class="-mt-4 md:mt-0 mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ปลายทาง*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                            </div>
                        </div>
                        <!-- longdo map route -->
                        <div class="flex md:col-span-2 justify-center">
                            <div class="-mt-4 mb-3 h-72 w-full">
                                <longdo-map/>
                            </div>
                        </div>
                        
                    </div>

                    <!-- submit button -->
                    <div class="mt-6">
                        <button type="submit" class="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <span class="m-2 text-white">เพิ่ม</span>
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "NewDriverModal",

        props: {
            show: Boolean
        },
        data() {
            return{
                 selectRoute: false,
                 driver: "",
                 truck: "",
                 route: "",
                 gender: "",
                 container: "",
                 origin: "",
                 desination: ""
            }
        },

        methods:{
            close_modal() {
                this.$emit("close")
            },
            onSubmit(){
                this.close_modal()
            }
        }
    }
</script>

<style>
    #map {
        height: 100%;
    }
</style>