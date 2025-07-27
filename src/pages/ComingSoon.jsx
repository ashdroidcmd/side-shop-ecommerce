import React, {useEffect} from 'react';

const ComingSoon = () => {
    useEffect(() => {
        document.title = "Side Shop | Coming Soon";
    }, []);
return (
    <>
    <section className="container vh-100">
        <div className="text-center my-5 py-5">
            <h1>Website on Development</h1>
        </div>
    </section>
    </>
)
}

export default ComingSoon