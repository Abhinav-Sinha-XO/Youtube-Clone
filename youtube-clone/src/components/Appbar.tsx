import { SearchBar } from "./Searchbar"

export const Appbar = () => {
  return <div className="flex justify-between pt-1">
    <div className="text-xl inline-flex items-center pl-3">
      <div className="bg-red-600 rounded-lg px-4 py-1">
        <span className="font-extrabold text-2xl text-white tracking-tight cursor-pointer">
          YouTube
        </span>
      </div>
    </div>
    <div>
      <SearchBar></SearchBar>
    </div>
     <div className="pr-8 flex items-center">
  <button className="flex items-center text-blue-600 border border-blue-600 rounded-full px-4 py-1 hover:bg-blue-50 
    sm:px-2 sm:py-0.5 sm:text-sm">
    <svg className="w-6 h-6 mr-2 sm:w-4 sm:h-4 sm:mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
    <span className="font-medium">Sign in</span>
  </button>
</div>
  </div>

}