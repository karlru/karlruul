from django.views.generic.base import TemplateView
from django.http import JsonResponse
import os
from github import Github

class ProjectListView(TemplateView):
	token = os.getenv('GITHUB_TOKEN')
	g = Github(token)
	projects = {}
	
	for repo in g.get_user().get_repos():
		if not repo.private:
			projects[len(projects)] = {
				'name': repo.name,
				'url': repo.html_url
			}

	def get(self, request):
		return JsonResponse({'projects': self.projects}, status=200)