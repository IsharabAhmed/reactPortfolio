import React from "react";
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitles,
	BtnWrap,
	ImgWrap,
	Img,
} from "./infoElements";

function InfoSection() {
	return (
		<>
			<InfoContainer>
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>TopLine</TopLine>
								<Heading>Heading</Heading>
								<Subtitles>Subtitles</Subtitles>
								<BtnWrap>
									{/* <Button to="home">Button</Button> */}
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default InfoSection;
