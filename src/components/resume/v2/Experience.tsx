import { Text, View } from '@react-pdf/renderer';

const ResumeV1Experience = ({ data, styles }: ResumeV2ExperienceProps) => {
	const { title, companies } = data;

	const generateTextsWithHighlights = (text: string) => {
		let result = [] as { text: string; isHighlighted: boolean }[];
		const regex = /\*\*(.*?)\*\*/g;

		let lastIndex = 0;

		for (const match of text.matchAll(regex)) {
			const fullMatch = match[0]; // "**something in here**"
			const content = match[1]; // "something in here"
			const index = match.index;

			// Push normal text before the match

			if (typeof index === 'number' && index > lastIndex) {
				result.push({
					text: text.slice(lastIndex, index).trim(),
					isHighlighted: false,
				});
			}

			// Push the matched text
			result.push({ text: content, isHighlighted: true });

			// Update lastIndex
			lastIndex = typeof index === 'number' ? index + fullMatch.length : 0;
		}

		// Push remaining text after the last match
		if (lastIndex < text.length) {
			result.push({ text: text.slice(lastIndex).trim(), isHighlighted: false });
		}
		return result;
	};

	return (
		<View style={styles.experienceContainer}>
			<Text style={styles.blockTitle}>{title}</Text>
			<View style={styles.companiesWrapper}>
				{companies.map(
					({ title, description, startTime, endTime, keyResponsibilities }) => {
						const newTextArr = keyResponsibilities.map(text => {
							return generateTextsWithHighlights(text);
							// return text.split(' ').map(item => {
							// 	if (item.startsWith('**')) {
							// 		return {
							// 			text: item.replaceAll('**', ''),
							// 			style: 'bold',
							// 		};
							// 	}
							// 	return {
							// 		text: item,
							// 		style: 'normal',
							// 	};
							// });
						});
						return (
							<View>
								<View key={title} style={styles.companyTitleWrapper}>
									<Text style={styles.companyTitle}>{title}</Text>
									{description && (
										<Text style={styles.companyDescription}>
											{`(${description})`}
										</Text>
									)}
								</View>
								<Text style={styles.companyDuration}>
									{`${startTime} - ${endTime || 'Present'}`}
								</Text>
								{newTextArr.map((item, index) => {
									return (
										<View
											key={'__text_View' + index}
											style={{
												display: 'flex',
												gap: '4px',
												alignItems: 'flex-start',
												flexDirection: 'row',
												paddingLeft: '12px',
												position: 'relative',
											}}
										>
											<Text style={styles.projectTitleBullet}>{`•`}</Text>
											<View
												style={{
													display: 'flex',
													flexDirection: 'row',
													gap: '2px',
													flexWrap: 'wrap',
													flexGrow: 1,
													flexBasis: 0,
												}}
											>
												{item.map(innerItem => {
													if (innerItem.text)
														return (
															<Text
																style={{
																	fontSize: '8px',
																	fontWeight: innerItem.isHighlighted
																		? 'bold'
																		: 'normal',
																}}
															>
																{innerItem.text}
															</Text>
														);
												})}
											</View>
										</View>
									);
								})}
							</View>
						);
					}
				)}
			</View>
		</View>
	);
};

export default ResumeV1Experience;

// if (text)
// 	return (
// 		<View
// 			key={text}
// 			style={{
// 				display: 'flex',
// 				gap: '4px',
// 				alignItems: 'flex-start',
// 				flexDirection: 'row',
// 				paddingLeft: '12px',
// 				position: 'relative',
// 			}}
// 		>
// 			<Text style={styles.projectTitleBullet}>{`•`}</Text>
// 			<View>
// 				{text.split('**').map(innerText => {
// 					return (
// 						<Text style={{ fontSize: '8px' }}>
// 							{innerText}
// 						</Text>
// 					);
// 				})}
// 			</View>
// 		</View>
// 	);
