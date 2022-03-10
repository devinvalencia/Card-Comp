import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-card";

const view = (state, { updateState }) => {
	return (
		<div>
			<now-card
				size="lg"
				interaction="none"
				sidebar={{ color: "positive", variant: "primary" }}
			>
				<now-card-header
					tagline={{ label: "Tagline" }}
					heading={{ label: "This is my card heading", size: "md", lines: 2 }}
					caption={{ label: "Caption with more info", lines: 2 }}
					dropdowns={[
						{
							id: "dropdown1",
							items: [
								{ id: "dropdownItem1", label: "Action One" },
								{ id: "dropdownItem2", label: "Action Two" },
							],
							icon: "ellipsis-v-outline",
							label: "More actions",
						},
					]}
					actions={[
						{ id: "action1", icon: "download-outline", label: "Download" },
					]}
				></now-card-header>
				<now-card-actions
					items={[
						{ label: "Confirm", icon: "thumbs-up-outline" },
						{ label: "Calculate", icon: "pencil-outline" },
						{ label: "Call", icon: "phone-outline" },
					]}
				></now-card-actions>
			</now-card>
		</div>
	);
};

createCustomElement("x-772283-card-card", {
	renderer: { type: snabbdom },
	view,
	styles,
});
