import { Helmet } from 'react-helmet';

const SEOComponent = ({title, description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export { SEOComponent };