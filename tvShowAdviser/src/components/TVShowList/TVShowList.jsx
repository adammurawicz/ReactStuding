import TVShowListItem from '../TVShowListItem/TVShowListItem'
import s from './TVShowList.module.css'

function TVShowList ({ tvShowList, onClickItem }) {
    return (
        <div>
            <div className={s.title}>You'll probably like:</div>
            <div className={s.list}>
                {tvShowList.map((tvShow) => {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                        <TVShowListItem 
                            onClick={onClickItem}
                            tvShow={tvShow}
                        />
                        </span>
                    ) 
                })
                }
            </div>
        </div>
    )
}

export default TVShowList