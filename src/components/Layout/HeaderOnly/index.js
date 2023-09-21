import Header from '~/components/Layout/components/Header';
function HeaderOnly({ children }) {
    return (
        <di className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </di>
    );
}

export default HeaderOnly;
