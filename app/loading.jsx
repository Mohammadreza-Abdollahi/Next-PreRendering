const Loading = () => {
    return ( 
        <section className="absolute top-0 w-full f-hight overflow-hidden bg-black opacity-50">
            <div className="absolute opacity-100 py-32 px-36 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-lg">
                <div className="spinner"></div>
            </div>
        </section>
     );
}
 
export default Loading;