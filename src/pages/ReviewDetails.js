import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

const REVIEW = gql`
query GetReview($id: ID!) {
	review(id: $id) {
	  data {
		id
		attributes{
		  title,
		  rating,
		  body
		  categories {
			data {
				id
				attributes {
					name
				}
			}
		}
	  }
	}
  }
}
`;
const ReviewDetails = () => {
	const { id } = useParams();
	// const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id);
	const { loading, error, data } = useQuery(REVIEW, {
		variables: { id: id }
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	return (
		<div className='review-card'>
			<div className='rating'>{data.review.data.attributes.rating}</div>
			<h2>{data.review.data.attributes.title}</h2>

			{data.review.data.attributes.categories.data.map(c => (
				<small key={c.id}>{c.attributes.name}</small>
			))}
			
			<ReactMarkdown>{data.review.data.attributes.body}</ReactMarkdown>
		</div>
	)
}

export default ReviewDetails;