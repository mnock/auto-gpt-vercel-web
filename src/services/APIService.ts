export class APIService {
  public onError?: (error: string) => void;

  constructor(private readonly baseUrl: string) {}

  private async fetchWrapper(
    endpoint: string,
    method: string = 'POST',
    body?: Record<string, unknown>,
  ) {

  }

  startCommand(command: string, preconfiguredInputs?: string[]) {

  }

  clearOutput() {
  }

  sendInput(input: string) {
  }

  killProcess() {
  }

  setEnvVariable(key: string, value: string) {
  }

  applyAiProfile(settings: {
    ai_name: string;
    ai_role: string;
    ai_goals: string[];
  }) {
  }
}

export default APIService;
