import { routes } from "../../routes"
import { useRoutes } from "react-router-dom";
function AllRouter (){
    const element = useRoutes(routes)
    return (
        <>
        {element}
        </>
    )
}

export default AllRouter;