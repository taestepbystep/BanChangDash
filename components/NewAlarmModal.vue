<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg lg:w-6/12">
            <div class="px-6 py-4 text-left">
                <!-- header -->
                <div class="flex items-center justify-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มการแจ้งเตือน</p>
                </div>

                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- alarm name -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">ชื่อการแจ้งเตือน*</label>
                                <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ชื่อการแจ้งเตือน">
                            </div>
                        </div>
                        <!-- level alarm -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">ระดับ*</label>
                                <select v-model="alarmLevel" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">เลือก</option>
                                    <option>แจ้งเตือน</option>
                                    <option>อันตราย</option>
                                </select>
                            </div>
                        </div>
                        <!-- condition alarm -->
                        <div class="w-full">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">เงื่อนไขการแจ้งเตือน*</label>
                            </div>
                            <!-- temperature -->
                            <div>
                                <div class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">อุณหภูมิ*</label>
                                        <select v-model="alarmTempConType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option disabled value="">เลือก</option>
                                            <option>มากกว่า</option>
                                            <option>น้อยกว่า</option>
                                            <option>กำหนด</option>
                                        </select>
                                    </div>
                                    <div v-show="alarmTempConType != 'กำหนด'" class="w-2/3 mb-3">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">องศา</label>
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>
                                <div v-show="alarmTempConType == 'กำหนด'" class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เงื่อนไข*</label>
                                        <input disabled value="มากกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="w-2/3 mb-3">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">องศา*</label>
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>

                                <div v-show="alarmTempConType == 'กำหนด'" class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <input disabled value="น้อยกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="w-2/3 mb-3">
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>
                            </div>

                            <!-- moisture -->
                            <div>
                                <div class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">ความชื้น*</label>
                                        <select v-model="alarmMoisConType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option disabled value="">เลือก</option>
                                            <option>มากกว่า</option>
                                            <option>น้อยกว่า</option>
                                            <option>กำหนด</option>
                                        </select>
                                    </div>
                                    <div v-show="alarmMoisConType != 'กำหนด'" class="w-2/3 mb-3">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เปอร์เซ็น</label>
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>
                                <div v-show="alarmMoisConType == 'กำหนด'" class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เงื่อนไข*</label>
                                        <input disabled value="มากกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="w-2/3 mb-3">
                                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เปอร์เซ็น*</label>
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>

                                <div v-show="alarmMoisConType == 'กำหนด'" class="flex items-center">
                                    <div class="w-1/3 mb-3 mr-2 md:mr-4">
                                        <input disabled value="น้อยกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="w-2/3 mb-3">
                                        <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                                    </div>
                                </div>
                            </div>
                                                          
                        </div>

                        <!-- alarm form type -->
                        <div class="w-full">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500">เตือนจาก*</label>
                            </div>
                            <div class="flex items-center">
                                <div class="w-1/2 mb-3 mr-2 md:mr-4">
                                    <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">ประเภท*</label>
                                    <select v-model="alarmFromType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>งาน</option>
                                        <option>คอนเทอนเนอร์</option>
                                    </select>
                                </div>
                                <div class="w-1/2 mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">รหัส*</label>
                                    <select :disabled="!alarmFromType" v-model="alarmFromId" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">เลือก</option>
                                        <option>job 1</option>
                                        <option>job 2</option>
                                        <option>job 3</option>
                                    </select>
                                </div>
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
                 alarmTempConType: "",
                 alarmMoisConType: "",
                 alarmFromType: "",
                 alarmFromId: "",
                 alarmLevel: "",
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