<template>
    <div v-if="show" class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto h-5/6 md:h-auto lg:h-5/6">
            <div class="modal-content py-4 text-left px-6">
                <!-- header -->
                <div class="flex justify-center items-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มคนขับ</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- profile picture -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">รูปโปรไฟล์*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                            </div>
                        </div>
                        <!-- driver license -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">รูปใบขับขี่*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                            </div>
                        </div>
                        <!-- first and lastname -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">ชื่อ-สกุล*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                            </div>
                        </div>
                        <!-- driver license number -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">เลขใบขับขี่*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="0000000000">
                            </div>
                        </div>
                        <!-- birthday -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">วันเกิด*</label>
                                <!-- <date-picker
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="วัน/เดือน/ปี"
                                    format="MM/dd/yyyy" 
                                /> -->
                            </div>
                        </div>
                        <!-- phone number -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">เบอร์โทรศัพท์*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="091239xxxx">
                            </div>
                        </div>
                        <!-- email -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">อีเมล*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" placeholder="example@gmail.com">
                            </div>
                        </div>
                        <!-- description -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">คำอธิบายเพิ่มเติม</label>
                                <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="4"></textarea>
                            </div>
                        </div>

                        <!-- ที่อยู่ -->
                        <div class="flex justify-center md:col-span-2">
                            <div class="mb-3 w-full">
                               <label for="formFile" class="form-label inline-block mb-2 text-gray-700">ที่อยู่</label>
                               <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                            </div>
                        </div>
                        <!-- จังหวัด -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">จังหวัด</label>
                                <select v-model="truck" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">เลือก</option>
                                    <option>truck 1</option>
                                    <option>truck 2</option>
                                    <option>truck 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- อำเภอ -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">เขต/อำเภอ</label>
                                <select v-model="truck" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">เลือก</option>
                                    <option>truck 1</option>
                                    <option>truck 2</option>
                                    <option>truck 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- ตำบล -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">ตำบล</label>
                                <select v-model="truck" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">เลือก</option>
                                    <option>truck 1</option>
                                    <option>truck 2</option>
                                    <option>truck 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- รหัสไปรษณีย์ -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">รหัสไปรษณีย์</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text">
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