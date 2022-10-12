import * as S from './index.style'
export default ({
    app
}) => {
    return (
        <>
            {
                app === undefined ? null : (
                    <S.Main>
                        <S.ProgressBarContainer>
                            <S.ProgressBar width={app.getCurrentTime() / app.getMaximumTime() * 100}>
                                <div></div>
                            </S.ProgressBar>
                        </S.ProgressBarContainer>
                    </S.Main>
                )
            }
        </>
    )
}