<template>
    <div v-if="show" class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto h-5/6 md:h-auto">
            <div class="py-4 text-left px-6">
                <!-- header -->
                <div class="flex justify-center items-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มรถบรรทุก</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- vehicle registration number -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ทะเบียนรถ*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="3กจ 18xx">
                            </div>
                        </div>
                        <!-- number of wheels -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">จำนวนล้อ*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="4">
                            </div>
                        </div>
                        <!-- truck picture -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">รูปโปรไฟล์*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                            </div>
                        </div>

                        <!-- status -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">สถานะ*</label>
                                <select v-model="truck" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">เลือก</option>
                                    <option>truck 1</option>
                                    <option>truck 2</option>
                                    <option>truck 3</option>
                                </select>
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