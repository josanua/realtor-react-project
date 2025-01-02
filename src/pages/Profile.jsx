import {useState} from "react";
import {getAuth, updateProfile} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {updateDoc} from "firebase/firestore";

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    const {name, email} = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    // update db data
    async function onSubmit() {
        try {
            if(auth.currentUser.displayName !== name) {
                // update in firebase auth data
                await updateProfile(auth.currentUser, {displayName: name});

                // update in the firestore
                const docRef = doc(db, "users", auth.currentUser.uid);
                await updateDoc(docRef, {name});

                toast.success("Profile updated successfully");
            }
        } catch (error) {
            toast.error("Could not update profile details");
        }
    }

    function onLogout() {
        auth.signOut();
        navigate("/");
    }

    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-6 px-3">
                    <form className="mt-6">
                        {/* Name input */}
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Name"
                            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
                            disabled = {!changeDetail}
                            onChange = {onChange}
                        />
                        {/* email */}
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="E-mail"
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                            disabled
                        />

                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="flex items-center">
                                Do you want to change your name?
                                <span
                                    className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                                    onClick={() => {
                                        changeDetail && onSubmit();
                                        setChangeDetail((prevState) => !prevState);
                                    }}
                                >
                                    {changeDetail ? "Apply change" : "Edit"}
                                </span>
                            </p>
                            <p
                                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                                onClick={onLogout}
                            >Sign out</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}