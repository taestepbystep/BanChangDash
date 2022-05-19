<template>
    <div v-if="show" class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto">
            <div class="py-4 text-left px-6">
                <!-- header -->
                <div class="flex justify-center items-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มตู้คอนเทนเนอร์</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- contianer name -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">หมายเลขตู้คอนเทนเนอร์*</label>
                                <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                            </div>
                        </div>
                        <!-- contianer size -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                                <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                            </div>
                        </div>
                        <!-- contianer picture -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                                <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
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