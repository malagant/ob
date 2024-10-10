import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Content,
  Header,
  Page,
  ContentHeader,
  SupportButton,
  InfoCard,
  Progress,
} from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import TenantForm from './TenantForm';
import GroupForm from './GroupForm';
import WorkspaceForm from './WorkspaceForm';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 720,
    margin: 'auto',
  },
}));

export const OnboardingPage = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [tenantData, setTenantData] = useState({});
  const [groupData, setGroupData] = useState({});
  const [workspaceData, setWorkspaceData] = useState({});

  const handleNext = (data: any) => {
    if (step === 0) setTenantData(data);
    if (step === 1) setGroupData(data);
    if (step === 2) setWorkspaceData(data);
    setStep(step + 1);
  };

  const steps = [
    { title: 'Tenant Information', component: TenantForm },
    { title: 'Group Information', component: GroupForm },
    { title: 'Workspace Setup', component: WorkspaceForm },
  ];

  const CurrentStepComponent = steps[step].component;

  return (
    <Page themeId="tool">
      <Header title="Onboarding" subtitle="Set up your Backstage instance" />
      <Content>
        <ContentHeader title="Welcome to Backstage">
          <SupportButton>Need help? Contact support.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}>
            <InfoCard>
              <Progress value={(step / (steps.length - 1)) * 100} />
              <h2>{steps[step].title}</h2>
              <CurrentStepComponent onNext={handleNext} />
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};