import React from "react"
import CustomButton from "./CustomButton.js"
import useFetch from "react-fetch-hook"

export default function CardHolder({id = 1}) {
    let cmnt_data = {
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis'
    };
    const {isLoading, data} = useFetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    console.log(isLoading);
    console.log(data);
    return (
        <div className="" style={{ "width": "98%", "height": "100vh" }}>
            <div className="d-flex align-items-center row justify-content-center h-100 d-inline-block">
                <div className="col-sm-6">
                    <h1 className="card-title display-4 text-center fw-bold">JSON PlaceHolder</h1>
                    <h4 className="card-title display-6 text-center" style={{ "marginTop": "5%", "color": "#8B5CF6" }}>comment #{id}</h4>
                    <div className="card w-100 border border-5 border-light rounded-3 shadow p-3 mb-5 bg-body" style={{ "marginTop": "10%", "padding": "3%" }}>
                        <div className="card-body">
                            <h3 className="card-title">{isLoading ? cmnt_data.name: data.name}</h3>
                            <h6 className="text-muted">{isLoading ? cmnt_data.email: data.email}</h6>
                            <p className="card-text" style={{ "marginTop": "5%", "fontSize": "1.4em" }}>{isLoading ? cmnt_data.body: data.body}</p>
                            <div className="flex justify-between mt-8">
                                <CustomButton link={`/comments/${id - 1}`} active={id >= 2 && id <= 100} text="&larr; Previous" new_id={id - 1} />
                                <CustomButton link={`/comments/${id + 1}`} active={id >= 1 && id <= 99} text="Next &rarr;" new_id={id + 1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}