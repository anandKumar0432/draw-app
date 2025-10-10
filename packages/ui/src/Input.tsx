

export function Input({type, placeholder}: {type:string, placeholder:string}){

    return <div>
        <input
              type={type}
              placeholder={placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-800"
            />
    </div>
}