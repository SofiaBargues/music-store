export default function AlbumListingItem({ album }) {

    

    return <div class="bg-gray-800 p-4 rounded relative">
        <div class="relative">
            <img
                src="https://via.placeholder.com/150"
                alt="Album"
                class="w-full rounded mb-2"
            />
            <button
                class="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300"
            >
                <span class="material-icons text-white"> play_arrow </span>
            </button>
        </div>

        <div class="text-left">
            <h3 class="text-md font-bold mb-1 text-white">{album.title}</h3>
            <p class="text-sm mb-2 text-gray-400">By Singer</p>
            <p class="text-sm mb-2 text-green-200">$9.99</p>

            <a
                href="#"
                class="inline-flex items-center text-green-400 hover:text-green-300"
            >
                <span class="material-icons"> shopping_cart </span>
                <span class="ml-1">Add to Cart</span>
            </a>
        </div>
    </div>
}