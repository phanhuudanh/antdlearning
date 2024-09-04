import LearnLayout from "../components/LearnLayout/learnlayout";
import BookRoom from "../pages/BookRoom";
import CreateRoom from "../pages/CreateRoom";
import DashBoard from "../pages/DashBoard";
import RoomList from "../pages/RoomList";


export const routes = [
    {
        path: "/",
        element: <LearnLayout/>,
        children: [
            {
                path: '/',
                element: <DashBoard/>
            },
            {
                path: "/bookroom",
                element: <BookRoom/>
            },
            {
                path: "/createroom",
                element: <CreateRoom/>
            },
            {
                path: "/roomlist",
                element: <RoomList/>
            }
        ]
    }
]