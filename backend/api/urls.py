from rest_framework import routers
from .views import CourseViewSet, StudentViewSet, ContactViewSet, GalleryViewSet

router = routers.DefaultRouter()
router.register('courses', CourseViewSet)
router.register('students', StudentViewSet)
router.register('contact', ContactViewSet)
router.register('gallery', GalleryViewSet)

urlpatterns = router.urls
