import { ReactNode } from "react";
import { dataParseElement } from "../App";


interface Props {
    items: Array<dataParseElement>;
}


export function Listing(props: Props = { items: [] }) {

    const itemArr: Array<ReactNode> = props.items.map((element) => {
        let levelQuantity:string
        let currencyCode:string

       if(element.quantity <= 10) {
        levelQuantity = "level-low"
       } else if(element.quantity <= 20) {
        levelQuantity = "level-medium"
       } else {
        levelQuantity = "level-high"
       }

       if (element.currency_code === "USD") {
        currencyCode = "$"
       } else if (element.currency_code === "EUR") {
        currencyCode = "€"
       } else {
        currencyCode = element.currency_code
       }

        return <div className="item" key={element.listing_id}>
            <div className="item-image">
                <a href={element.url}>
                    <img src={element.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{element.title.length > 50 ? element.title.substring(0, 50): element.title}</p>
                <p className="item-price">{currencyCode + " " + element.price}</p>
                <p className={levelQuantity+ " item-quantity"}>{element.quantity + " left"}</p>
            </div>
        </div>
       
    })

    return <div className="item-list">{itemArr}</div>

}

