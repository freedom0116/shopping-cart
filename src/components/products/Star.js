import './Products.css';
import { Star, StarHalf, StarBorder } from '@material-ui/icons';
import { yellow } from '@material-ui/core/colors';

function productRating({ rating, number }) {
    const starStyle = {
        color: yellow[700],
        fontSize: 20
    }

    return (
        <div>
            {(rating <= number) ?
                <StarBorder style={starStyle} /> : (rating < number + 1) ?
                <StarHalf style={starStyle} /> : <Star style={starStyle} />
            }
        </div>
    );
}

export default productRating;