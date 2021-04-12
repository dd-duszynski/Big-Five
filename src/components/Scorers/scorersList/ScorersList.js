import React, { useState } from "react";
import styles from "./ScorersList.module.scss";
import Spinner from "../../UI/Spinner";
import ScorersRow from "../../UI/ScorersRow";
import ScorersRowHeader from "../../UI/ScorersRowHeader";
import MainBar from "../../MainBar/MainBar";
import Pagination from "../../Pagination/Pagination";

const ScorersList = ({ scorers, league }) => {
	const [page, setPage] = useState(1);

	const lastElement = page * 10;
	const firstElement = lastElement - 10;

	let scorersToShow;
	if (scorers && page === 1) {
		scorersToShow = scorers.filter((_, id) => id < page * 10);
	} else if (scorers && page > 1) {
		scorersToShow = scorers.slice(firstElement, lastElement);
	}

	const paginate = (pageNr) => {
		setPage(pageNr);
	};

	return (
		<div className={styles.scorers}>
			<MainBar league={league} noClick />
         <div className={styles.container}>
            <ScorersRowHeader />
            {scorersToShow ? (
               scorersToShow.map((item) => (
                  <ScorersRow key={item.player.name} player={item} />
               ))
            ) : (
               <Spinner />
            )}

         </div>
			<Pagination
				currentPage={page}
				elementsPerPage={10}
				allElements={scorers.length}
				paginate={paginate}
			/>
		</div>
	);
};
export default ScorersList;
