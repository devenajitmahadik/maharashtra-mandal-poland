import "./pageHeading.scss";

const PageHeading = (props) => {
    const { pageHeading } = props;

    return (
        <div className="page-heading-wrapper">
            <div className="page-heading-image-filter"></div>
            <div className="page-heading">{pageHeading}</div>
        </div>
    )
};

export default PageHeading;