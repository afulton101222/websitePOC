import React from 'react';
import Link from 'next/link';
import {Title, Container, Box, Block, Table, Button, Icon, Progress, Column} from 'rbx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {privateRoute} from '../../../components/private-route';
import {useAPIRoute} from '../../../components/api-client-context';
import ModelTable from '../../../components/model-table';
import {IServer} from '../../../lib/types';

const ServersPage = () => {
	const servers = useAPIRoute<IServer[]>('/api/servers');

	return (
		<ModelTable
			title="Servers"
			addHref="/admin/servers/new"
			data={servers}
			loading={servers === undefined}
			headerLabels={['Name', 'Domain', 'Edit']}
			renderRow={server => (
				<Table.Row key={server.id}>
					<Table.Cell>{server.name}</Table.Cell>
					<Table.Cell>{server.domain}</Table.Cell>
					<Table.Cell>
						<Link passHref href={`/admin/servers/${server.id}`}>
							<Button color="warning" as="a">
								<Icon size="small">
									<FontAwesomeIcon icon={faPen} color="black"/>
								</Icon>
							</Button>
						</Link>
					</Table.Cell>
				</Table.Row>
			)}
		/>
	);
};

export default privateRoute(ServersPage);
