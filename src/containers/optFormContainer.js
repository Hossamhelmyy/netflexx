import OptForm from '../components/opt-form/index';

export function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Wrapper>
        <OptForm.Div>
          <OptForm.Input placeholder="Email address" />
        </OptForm.Div>
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm.Wrapper>
      <OptForm.Break />
    </OptForm>
  );
}
