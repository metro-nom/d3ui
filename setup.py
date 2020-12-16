from setuptools import setup, find_packages

import versioneer

setup(
    author='Markus Leist',
    author_email='markus.leist@metronom.com',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'Intended Audience :: Information Technology',
        'Intended Audience :: System Administrators',
        'Intended Audience :: Telecommunications Industry',
        'License :: OSI Approved :: BSD License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.8',
    ],
    cmdclass=versioneer.get_cmdclass(),
    description='D3 Frontend is a Flask+React web app',
    include_package_data=True,
    license="BSD license",
    keywords='d3',
    name='d3ui',
    packages=find_packages(),
    version=versioneer.get_version(),
)
