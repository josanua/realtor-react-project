import spinner from "../assets/svg/spinner.svg";
export default function Spinner() {
    return (
        <div className="bg-black bg-opacity-50 flex intems-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full">
            <div className="flex items-center justify-center">
                <img src={spinner} alt="" className="h-24"/>
            </div>
        </div>
    )
}