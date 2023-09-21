import Header from '~/components/Layout/components/Header';
function DefaultLayout({ children }) {
    return (
        <di className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </di>
    );
}

export default DefaultLayout;
