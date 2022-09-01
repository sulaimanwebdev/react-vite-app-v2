import {CgPen, CgTrash} from "react-icons/cg"

const SavedMessage = ({message}) => {
    return (
        <div className="flex py-4 justify-between items-center px-4 border-b border-gray-300">
            <div className="text-gray-800">{message}</div>

            <div className="flex gap-6">
                <CgPen className="text-2xl text-gray-400 hover:text-gray-800" />
                <CgTrash className="text-2xl text-gray-400 hover:text-gray-800" />
            </div>
        </div>
    )
}

export default SavedMessage