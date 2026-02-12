export default function Screen6({ hourglassLocation, setPortalClone }) {

    return (
        <div className="screen-6">
            {hourglassLocation == "north" ? ( 
                <>
                    <div className="option" onClick={() => setPortalClone("sides safe")}>
                        <span className="option-name">North (Hourglass)</span>
                    </div>
                    <div className="option" onClick={() => setPortalClone("boss safe")}>
                        <span className="option-name">South (Bowtie)</span>
                    </div>
                </>   
            ) : (
                  <>
                    <div className="option" onClick={() => setPortalClone("boss safe")}>
                        <span className="option-name">North (Bowtie)</span>
                    </div>
                    <div className="option" onClick={() => setPortalClone("sides safe")}>
                        <span className="option-name">South (Hourglass)</span>
                    </div>
                </>  
            )}
               
        </div>
    )
}