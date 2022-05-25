import react from "react"
import ApiService from "../../pages/service/ApiService"
import LinkCard from "./LinkCard";
import LinkForm from "./LinkForm";

export default function LinksWrapper(){
    const [links, setLinks] = react.useState([]);
    const updateLinks = () => {
        ApiService.getLinks()
        .then((links) => {
            setLinks(links);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    react.useEffect(()=>{
        updateLinks();
    },[]);
    return(
        <div>
            <LinkForm updateCallback={updateLinks}/>
            {links && links.map((link) => (
                <LinkCard key={link.id} {...link} updateCallback={updateLinks}/>
            ))}
        </div>
    )
}