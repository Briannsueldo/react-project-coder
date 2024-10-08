import React from "react";

export const FormDetail = ({ infoChange, submit, formData, error }) => {
    return <>
        <div>
            <h3>Order validation</h3>

            <form onSubmit={submit}>
                {
                    Object.keys(formData).map((key, i) => (
                        <>
                            <label htmlFor={key}> Your {key} </label>
                            <input type="text" name={key} id={key} onChange={infoChange}/>
                            {
                                error[key] && <span>{error[key]}</span>
                            }
                        </>
                    ))
                }
                <button>Create order</button>
            </form>
        </div>
    </>
}