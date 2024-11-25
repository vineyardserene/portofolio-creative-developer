<template><br><br><br><br><br><br><br><br><br><br><br>  <br><br>  <br>
  <div class="relative">
    <!-- Bagian Form Kontak -->
    <div
      class="absolute inset-x-0  z-50 bg-[#F5F5F5] opacity-70 max-w-5xl mx-auto p-10 rounded-lg mt-16" 
      style="margin-top: -410px;"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Konten Kiri -->
        <div>
          <h2 class="text-2xl font-bold text-[#4C5AC2]">Contact me</h2>
          <p class="text-gray-600 mt-4">
            Dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum
            egestas orci netus feugiat ut egestas ut sagittis dolor sit tincidunt phasellus elit
            etiam cursus orci in. Id sed montes.
          </p>
          <p class="text-gray-600 mt-4">
            If you have any question or need help, just click the button, feel free to send a
            message anytime.
          </p>
          <h3 class="text-xl font-bold text-[#4C5AC2] mt-8">And follow me</h3>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-600"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-600"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-600"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-600"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Form Kontak Kanan -->
        <div>
          <form>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-600">Your Name</label>
                <input
                  type="text"
                  class="w-full border-b-2 border-[#4C5AC2] focus:border-[#4C5AC2] outline-none py-2 bg-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label class="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  class="w-full border-b-2 border-[#4C5AC2] focus:border-[#4C5AC2] outline-none py-2 bg-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div class="mt-6">
              <label class="block text-gray-600">Your Subject</label>
              <input
                type="text"
                class="w-full border-b-2 border-[#4C5AC2] focus:border-[#4C5AC2] outline-none py-2 bg-transparent"
                placeholder="Enter your subject"
              />
            </div>
            <div class="mt-6">
              <label class="block text-gray-600">Message</label>
              <textarea
                class="w-full border-b-2 border-[#4C5AC2] focus:border-[#4C5AC2] outline-none py-2 bg-transparent"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div class="mt-6 flex justify-center">
              <button
                class="bg-[#4C5AC2] text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Bagian Footer -->
    <footer class="mt-20 bg-[#ABB8E4] py-20 pb-5">
      <div class="max-w-5xl mx-auto grid grid-cols-1 place-items-center md:grid-cols-3 gap-6 text-white">
        <div>
          <h4 class="font-bold text-[#4C5AC2]">Neida Widiana</h4>
          <ul class="mt-4 space-y-2">
            <li>Continue to learn and improve skills in a good and creative way</li>
            <li>orci netus feugiat ut egestas ut sagittis dolor sit t</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-[#4C5AC2]">Pages</h4>
          <ul class="mt-4 space-y-0">
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">services</a></li>
            <li><a href="#" class="hover:underline">Project</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-[#4C5AC2]">Contact</h4>
          <ul class="mt-4 space-y-2">
            <li><i class="fas fa-phone-alt"></i> 62 8967236478</li>
            <li><i class="fas fa-envelope"></i> hello@gmail.com</li>
            <li><i class="fas fa-map-marker-alt"></i> Bandung, Indonesia</li>
          </ul>
        </div>
      </div>
      <hr class="max-w-5xl mx-auto text-[#4C5AC2] mt-9 " />
      <div class="text-center text-white mt-3">
        <p>Copyright© 2024. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
