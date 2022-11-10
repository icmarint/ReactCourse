import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    /* console.log(props); */

    return (
        <>
        {/* <div data-testid="test-title"> { title } </div> */}
        <h1 data-testid="test-title"> { title } </h1>
        <p>{subTitle + 1}</p>
        <p>{subTitle + 1}</p>
        <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    //title: "No hay title",
    subTitle: "No hay subTitle",
    name: "Isabel"
}